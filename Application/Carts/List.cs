using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Carts
{
    public class List
    {
        public class Query : IRequest<List<Cart>> { }

        public class Handler : IRequestHandler<Query, List<Cart>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Cart>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Cart.ToListAsync();
            }
        }
    }
}