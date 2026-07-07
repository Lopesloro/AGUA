import http.server, socketserver, sys, os
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
class S(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads=True
port=int(sys.argv[1]) if len(sys.argv)>1 else 5501
S(("127.0.0.1",port),H).serve_forever()
