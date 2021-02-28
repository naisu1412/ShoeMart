using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
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

            await context.Items.AddRangeAsync(items);
            await context.SaveChangesAsync();

        }
    }
}