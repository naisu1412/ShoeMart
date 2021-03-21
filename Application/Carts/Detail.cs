using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Carts
{
    public class Detail
    {
        public class Query : IRequest<Cart>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Cart>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Cart> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Cart.FindAsync(request.Id);
            }
        }
    }
}