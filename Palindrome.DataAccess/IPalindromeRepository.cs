using System.Collections.Generic;
using Palindrome.DataAccess.Entities;
using System;

namespace Palindrome.DataAccess
{
    public interface IPalindromeRepository
    {
        void AddEntryToPersistedItems(PersistedEntry entry);

        PersistedEntry GetPersistedEntry(Guid id);

        IEnumerable<PersistedEntry> GetPersistedList();

        bool SaveAll();
    }
}