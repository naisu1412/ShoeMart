using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Interfaces;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;


namespace Application.Carts
{
    public class List
    {
        public class Query : IRequest<List<CartedItems>> { }

        public class Handler : IRequestHandler<Query, List<CartedItems>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }
            public async Task<List<CartedItems>> Handle(Query request, CancellationToken cancellationToken)
            {
                //need to get the current user
                //find all the cart items for that user
                var user = await _context.Users.SingleOrDefaultAsync(x => x.Id == _userAccessor.GetCurrentUsername());
                var _items = await _context.CartedItems.ToListAsync();
                var cartedItemsQuery = _items.AsQueryable().Where(a => a.CartId == user.CartID).ToList();

                return cartedItemsQuery;
            }
        }
    }
}