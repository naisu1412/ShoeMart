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
        public class Query : IRequest<CartedItems>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, CartedItems>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<CartedItems> Handle(Query request, CancellationToken cancellationToken)
            {
                
                // return await _context.CartedItems.FindAsync(request.Id);
                return null;
            }
        }
    }
}