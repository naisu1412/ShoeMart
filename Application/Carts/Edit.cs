using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Carts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Cart Cartitem { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var item = await _context.Cart.FindAsync(request.Cartitem.Id);

                if (item == null)
                    throw new RestException(HttpStatusCode.NotFound, new { Cart = "Not Found" });

                _mapper.Map(request.Cartitem, item);

                var itemInInventory = await _context.Items.FindAsync(request.Cartitem.ItemID);

                if (itemInInventory == null)
                    throw new RestException(HttpStatusCode.NotFound, new { Item = "Not Found" });


                if (itemInInventory.Quantity > 0)
                    itemInInventory.Quantity -= 1;
                else
                    throw new RestException(HttpStatusCode.BadRequest, new { Item = "No More Stock" });

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}