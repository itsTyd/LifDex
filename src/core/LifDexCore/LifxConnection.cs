using System;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace LifDexCore
{
    public class LifxConnection : IDisposable
    {
        private int port = 56700;
        private UdpClient socket;
        private bool isRunning = false;

        public LifxConnection(bool init = false)
        {
            if (init)
            {
                var endpoint = new IPEndPoint(IPAddress.Any, port);

                socket = new UdpClient(endpoint);
                socket.Client.Blocking = false;
                socket.DontFragment = true;
                socket.Client.SetSocketOption(SocketOptionLevel.Socket, SocketOptionName.ReuseAddress, true);

                isRunning = true;
                ReceiveLoop();
            }
        }

        public static Task<LifxConnection> CreateAsync()
        {
            var connection = new LifxConnection(true);

            return Task.FromResult(connection);
        }

        public void ReceiveLoop()
        {
            if (socket == null)
                return;

            Task.Run(async () =>
            {
                while (isRunning)
                {
                    try
                    {
                        var datagram = await socket.ReceiveAsync();
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                }
            });
        }

        private Task Test(UdpReceiveResult datagram)
        {
            Console.WriteLine(datagram.Buffer);

            return null;
        }

        public void Dispose()
        {
            isRunning = false;
            socket.Dispose();
        }
    }
}
