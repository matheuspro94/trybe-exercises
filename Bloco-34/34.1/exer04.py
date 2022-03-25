from socketserver import TCPServer, StreamRequestHandler

ADDRESS = ("localhost", 8080)


class EchoHandler(StreamRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        print(self.rfile.readline().strip().decode("UTF-8"))


if __name__ == "__main__":

    with TCPServer(ADDRESS, EchoHandler) as server:
        print("Server TCP ativo")
        server.serve_forever()
