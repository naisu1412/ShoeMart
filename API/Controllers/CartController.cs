using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Carts;
using MediatR;

namespace API.Controllers
{
    public class CartController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<CartedItems>>> GetItems()
        {
            return await Mediator.Send(new List.Query());
        }

        // [HttpPost]
        // public async Task<ActionResult<List<Cart>>> AddItem(Item item)
        // {
        //     return Ok(await Mediator.Send(new Add.Command { CartItem = item }));
        // }

        // [HttpDelete("{id}")]
        // public async Task<ActionResult<Cart>> DeleteItem(Guid id)
        // {
        //     return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        // }


        // [HttpPut("{id}")]
        // public async Task<ActionResult<Unit>> Edit(Guid id, Cart cartItem)
        // {
        //     cartItem.Id = id;
        //     return Ok(await Mediator.Send(new Edit.Command { Cartitem = cartItem }));

        // }
    }
}