using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Item, Item>();
            CreateMap<Cart, Cart>();
        }
    }
}