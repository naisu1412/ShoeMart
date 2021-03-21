using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Carts
{
    public class Add
    {
        public class Command : IRequest
        {
            public Cart CartItem { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var item = new Cart()
                {
                    ItemID = request.CartItem.ItemID
                };

                await _context.Cart.AddAsync(item);

                var itemInInventory = await _context.Items.SingleOrDefaultAsync(x => x.Id == request.CartItem.ItemID);

                if (itemInInventory == null)
                    throw new RestException(HttpStatusCode.NotFound, new { Item = "Not Found" });

                if (itemInInventory.Quantity > 0)
                    itemInInventory.Quantity -= 1;
                else
                    throw new RestException(HttpStatusCode.BadRequest, new { Item = "No More Stock" });

                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new Exception("Problem in Saving changes");
            }
        }
    }
}