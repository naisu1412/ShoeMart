using System;

namespace Domain
{
    public class Item
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public float Price { get; set; }    // Default Dollar
        public int Rating { get; set; }
        public int Quantity { get; set; }


        
    }
}