from BeautifulSoup import BeautifulSoup

with open('templates/periodic_table.html') as doc:
    parsed_html = BeautifulSoup(doc)
    for td in parsed_html('td'):
        print td
