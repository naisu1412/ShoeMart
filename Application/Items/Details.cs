using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Items
{
    public class Details
    {
        public class Query : IRequest<Item>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Item>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Item> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Items.FindAsync(request.Id);
            }
        }
    }
}