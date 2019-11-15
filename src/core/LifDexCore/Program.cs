using System;

namespace LifDexCore
{
    class Program
    {
        static void Main(string[] args)
        {
            var task = LifxConnection.CreateAsync();
            task.Wait();

            Console.WriteLine(task.Result);


            ConsoleKeyInfo key;
            do
            {
                key = Console.ReadKey(true);
            } while (key.Key != ConsoleKey.Escape);
        }
    }
}
