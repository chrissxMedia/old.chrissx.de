using System.Diagnostics;
using static System.Console;

namespace apache_transfer
{
    class Program
    {
        static void Main(string[] args)
        {
            Write("From: ");
            string from = ReadLine();
            Write("To: ");
            string to = ReadLine();
            Process.Start(new ProcessStartInfo("scp", $"-4 -c aes256-ctr -C -p -P 22 {from} pi@192.168.2.104:{to}")
            {
                CreateNoWindow = false,
                RedirectStandardError = false,
                RedirectStandardInput = false,
                RedirectStandardOutput = false,
                UseShellExecute = true
            });
        }
    }
}
