using System;

namespace Palindrome.DataAccess.Entities
{
    public class PersistedEntry
    {
        public Guid Id { get; set; }

        public string Entry { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
