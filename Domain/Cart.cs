using System;
using System.Collections.Generic;

namespace Domain
{
    public class Cart
    {
        public Guid Id { get; set; }
        public virtual AppUser User { get; set; }
        public virtual ICollection<CartedItems> Items { get; set; }

    }
}