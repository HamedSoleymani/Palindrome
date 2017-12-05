using System.Linq;

namespace Palindrome.Web.Extension
{
    public static class StringExtensions
    {
        public static bool IsPalindrome(this string input)
        {
            input = input.ToLowerInvariant();

            return input
                .Zip(input.Reverse(), (a, b) => a == b)
                .Take(input.Length / 2)
                .All(a => a);
        }
    }
}
