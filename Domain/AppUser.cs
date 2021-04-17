using System;
using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public Guid CartID { get; set; }
        public virtual Cart Cart { get; set; }

    }
}