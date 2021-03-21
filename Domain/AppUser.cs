using Microsoft.AspNetCore.Identity;

namespace Domain
{
    public class AppUser: IdentityUser
    {
        public string DisplayName { get; set; }
        public string Address { get; set; }
        public string BillingAddress { get; set; }  //To be updated
        public string Phone { get; set; }
        public Cart Cart { get; set; }
    }
}