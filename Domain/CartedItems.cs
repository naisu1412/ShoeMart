using System;

namespace Domain
{
    public class CartedItems
    {
        public Guid Id { get; set; }
        public Guid CartId { get; set; }
        public Guid ItemId { get; set; }
        public virtual Cart Cart { get; set; }
        public virtual Item Item { get; set; }

    }
}