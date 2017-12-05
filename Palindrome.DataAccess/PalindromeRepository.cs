using Palindrome.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Palindrome.DataAccess
{
    public class PalindromeRepository : IPalindromeRepository
    {
        private readonly PalindromeContext _ctx;

        public PalindromeRepository(PalindromeContext ctx)
        {
            _ctx = ctx;
        }

        public PersistedEntry GetPersistedEntry(Guid id)
        {
            return _ctx.PersistedEntries
                .Where(x => x.Id == id)
                .FirstOrDefault();
        }

        public IEnumerable<PersistedEntry> GetPersistedList()
        {
            return _ctx.PersistedEntries.ToList();
        }

        public void AddEntryToPersistedItems(PersistedEntry entry)
        {
            _ctx.Add(entry);
        }

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
