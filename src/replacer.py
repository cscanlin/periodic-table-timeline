import json

replace_dict = {
    '"background: #cccc99;"': '"metalloid"',
    '"background: #ff6666;"': '"alkali-metal"',
    '"background: #ffdead;"': '"alkaline-earth-metal"',
    '"background: #ffbfff;"': '"lanthanide"',
    '"background: #ff99cc;"': '"actinide"',
    '"background: #ffc0c0;"': '"transition-metal"',
    '"background: #cccccc;"': '"post-transition-metal"',
    '"background: #a1ffc3;"': '"polyatomic-nonmetal"',
    '"background: #e7ff8f;"': '"diatomic-nonmetal"',
    '"background: #c0ffff;"': '"noble-gas"',
}


# with open('elements.txt') as in_f, open('replaced_elements.txt', 'w') as out_f:
#     for line in in_f.readlines():
#         for k, v in replace_dict.items():
#             line = line.replace(k, v)
#         out_f.write(line)

with open('element_data.json') as e_data, open('discovery.json') as disc_data, open('element_data_new.json', 'w') as e_out:
    data = json.loads(e_data.read())
    years = json.loads(disc_data.read())
    for el in data.keys():
        data[el]['discoveryYear'] = years[el]
    json.dump(data, e_out, indent=2)
