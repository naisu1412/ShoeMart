using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Carts
{
    public class Add
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
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
                var cartItem = await _context.Cart.FindAsync(request.Id);
                
                // create carted item where 
                // user is current user and cart is user's cart
                // reduce item in inventory

                _context.Add(cartItem);

                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }


}