using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using MediatR;
using Application.Items;

namespace API.Controllers
{
    public class ItemsController : BaseApiController
    {


        [HttpGet]
        public async Task<ActionResult<List<Item>>> GetItems()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(Guid id)
        {
            return await Mediator.Send(new Details.Query { Id = id });
        }

        [HttpPost]
        public async Task<IActionResult> Create(Item item)
        {
            return Ok(await Mediator.Send(new Create.Command { Item = item }));
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, Item item)
        {
            item.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Item = item }));

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Unit>> DeleteItem(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id })); 
        }

    }
}