from flask import Flask, stream_with_context, request, Response, url_for
from shelljob import proc
from flask import render_template

import time
from BeautifulSoup import BeautifulSoup

app = Flask(__name__)

@app.route("/")
def periodic_table():
    css_url = url_for('static', filename='style1-unresponsive.css')
    return render_template('periodic_table.html',css_url=css_url)

@app.route('/simple-stream')
def streamed_response():
    return Response(stream_with_context(generate()))

def generate():
    yield 'Hello '

@app.route( '/stream' )
def stream():
    g = proc.Group()
    p = g.run( [ "bash", "-c", "for ((i=0;i<100;i=i+1)); do echo $i; sleep 1; done" ] )

    def read_process():
        while g.is_pending():
            lines = g.readlines()
            for proc, line in lines:
                yield line

    return Response( read_process(), mimetype= 'text/plain' )

def stream_template(template_name, **context):
    app.update_template_context(context)
    t = app.jinja_env.get_template(template_name)
    rv = t.stream(context)
    return rv

@app.route('/my-large-page.html')
def render_large_template():
    elements = iter_elements('periodic_table.html')
    return Response(stream_template('stream_table.html', elements=elements))

def iter_elements(element_html_template):
    with open('templates/'+element_html_template) as doc:
        parsed_html = BeautifulSoup(doc)
        for td in parsed_html('td', attrs={'id':'table-data'}):
            time.sleep(1)
            yield td

@app.route("/hello")
def hello():
    return "Hello World!"

if __name__ == "__main__":
    app.run(debug=True)
