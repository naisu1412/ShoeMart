using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Carts
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Item item { get; set; }
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
                var cartItem = await _context.Cart.FindAsync(request.item.Id);

                _context.Remove(cartItem);

                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }


}