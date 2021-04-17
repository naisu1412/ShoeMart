using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Item> Items { get; set; }
        public DbSet<Cart> Cart { get; set; }
        public DbSet<CartedItems> CartedItems { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<CartedItems>(x => x.HasKey(ci => new { ci.CartId, ci.ItemId }));

            builder.Entity<CartedItems>()
            .HasOne(c => c.Cart)
            .WithMany(i => i.Items)
            .HasForeignKey(ci => ci.CartId);

            builder.Entity<Cart>()
            .HasOne(c => c.User)
            .WithOne(u => u.Cart)
            .HasForeignKey<AppUser>(au => au.CartID);
            

        }

    }
}