using Microsoft.EntityFrameworkCore;
using Palindrome.DataAccess.Entities;

namespace Palindrome.DataAccess
{
    public class PalindromeContext : DbContext
    {
        public PalindromeContext(DbContextOptions<PalindromeContext> options): base(options)
        {
        }

        public DbSet<PersistedEntry> PersistedEntries { get; set; }
    }
}
