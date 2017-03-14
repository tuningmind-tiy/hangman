## run as python makedictionary.py > dictionary.js
dictionary = open('/usr/share/dict/words', 'r').read().split()

dictionary = [w.lower() for w in dictionary if 11 > len(w) > 3]


print dictionary 
