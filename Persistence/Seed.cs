using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {




            //Check if there's any value
            if (context.Items.Any()) return;

            var items = new List<Item>
            {
                new Item {
                    Name="Converse",
                    Date=DateTime.Now.AddMonths(-3),
                    Description="Converse for men shoes",
                    Price=1,
                    Rating=5,
                    Quantity=3
                },
                new Item {
                    Name="JY. Men's Saucy Style",
                    Date=DateTime.Now.AddMonths(-3),
                    Description="JY. Men's Saucy Style Shoes Korean Trendy Sneakers #M100 (Standard SIze)",
                    Price=3,
                    Rating=3,
                    Quantity=32
                },
                new Item {
                    Name="2020 Korean Fashion Running Rubber",
                    Date=DateTime.Now.AddMonths(-1),
                    Description="2020 Korean Fashion Running Rubber PU White Sneakers Unisex Shoes For Women&Men",
                    Price=4.65f,
                    Rating=5,
                    Quantity=54
                },
                 new Item {
                    Name="JY. Ladies Sunflower Breathable Cute Trendy",
                    Date=DateTime.Now.AddMonths(-5),
                    Description="JY. Ladies Sunflower Breathable Cute Trendy Shoes Korean Sneakers #B408 (Add One Size)",
                    Price=4.65f,
                    Rating=5,
                    Quantity=54
                },
                 new Item {
                    Name="2020 Korean Fashion Running Rubber",
                    Date=DateTime.Now.AddMonths(-6),
                    Description="2020 Korean Fashion Running Rubber PU White Sneakers Unisex Shoes For Women&Men",
                    Price=23.65f,
                    Rating=2,
                    Quantity=34
                }


            };
            var users = new List<AppUser>{
                    new AppUser{
                        DisplayName = "bob",
                        UserName= "Bob",
                        Email="bob@test.com",
                        CartID = new Guid(),
                        Cart= new Cart{}
                    },
                    new AppUser{
                        DisplayName = "Tom",
                        UserName= "tom",
                        Email="tom@test.com",
                        CartID = new Guid(),
                        Cart= new Cart{}
                    },
                    new AppUser{
                        DisplayName = "jane",
                        UserName= "jane",
                        Email="jane@test.com",
                        CartID = new Guid(),
                        Cart= new Cart{}
                    }
                };

            if (context.CartedItems.Any()) return;

            var cartedItems = new List<CartedItems>{
                   new CartedItems {
                       CartId = users[0].Cart.Id,
                       ItemId = items[0].Id,
                       Item = items[0],
                       Cart = users[0].Cart
                   }
               };

            if (!userManager.Users.Any())
            {

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }

            await context.Items.AddRangeAsync(items);
            await context.CartedItems.AddRangeAsync(cartedItems);
            await context.SaveChangesAsync();


        }
    }
}