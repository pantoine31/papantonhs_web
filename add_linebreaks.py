import json
import re

# Διάβασε το αρχείο JSON
with open('c:/Users/OPAP/papantonhs_web/public/data/posts.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Βρες το post με id 13
for post in data:
    if post['id'] == 13:
        text = post['text']
        
        # Πρόσθεσε επιπλέον \n σε στρατηγικά σημεία για καλύτερη αναγνωσιμότητα
        # Μετά από σημεία στίξης όπου υπάρχει ήδη ένα \n, πρόσθεσε άλλο ένα
        text = text.replace('------\n«', '------\n\n«')
        text = text.replace('ψηλά»\n------\nΤην', 'ψηλά»\n------\n\nΤην')
        text = text.replace('ημέρα.\nΤη', 'ημέρα.\n\nΤη')
        text = text.replace('φως.\nΜένει', 'φως.\n\nΜένει')
        text = text.replace('βιαστικά.\nΑνοίγεις', 'βιαστικά.\n\nΑνοίγεις')
        text = text.replace('έξω.\nΤην', 'έξω.\n\nΤην')
        text = text.replace('πράγματα.\nΔεν', 'πράγματα.\n\nΔεν')
        text = text.replace('απόγευμα.\nΠερπατάς', 'απόγευμα.\n\nΠερπατάς')
        text = text.replace('μέσα.\nΟι', 'μέσα.\n\nΟι')
        text = text.replace('τους.\nΟι', 'τους.\n\nΟι')
        text = text.replace('χρώμα.\nΤην', 'χρώμα.\n\nΤην')
        text = text.replace('εκεί.\nΌταν', 'εκεί.\n\nΌταν')
        text = text.replace('γειτονιά.\nΌταν', 'γειτονιά.\n\nΌταν')
        text = text.replace('μήνες.\nΒέβαια', 'μήνες.\n\nΒέβαια')
        text = text.replace('άνθρωποι.\nΌτι', 'άνθρωποι.\n\nΌτι')
        text = text.replace('μας.\nΑν', 'μας.\n\nΑν')
        text = text.replace('κουβέντα.\nΧρώμα', 'κουβέντα.\n\nΧρώμα')
        text = text.replace('δίνουν.\nΤην', 'δίνουν.\n\nΤην')
        text = text.replace('λίγο.\nΧαμογελούν', 'λίγο.\n\nΧαμογελούν')
        text = text.replace('πρόθυμα.\nΛένε', 'πρόθυμα.\n\nΛένε')
        text = text.replace('σκέψη.\nΣαν', 'σκέψη.\n\nΣαν')
        text = text.replace('καιρό.\nΗ', 'καιρό.\n\nΗ')
        text = text.replace('θεαματικά.\nΈρχεται', 'θεαματικά.\nΈρχεται')
        text = text.replace('σιγά.\nΜέσα', 'σιγά.\n\nΜέσα')
        text = text.replace('σημάδια.\nΚαι', 'σημάδια.\n\nΚαι')
        text = text.replace('έξω.\nΚαι', 'έξω.\n\nΚαι')
        text = text.replace('άνοιξη.\nΌχι', 'άνοιξη.\n\nΌχι')
        text = text.replace('καιρό.\nΑλλά', 'καιρό.\n\nΑλλά')
        text = text.replace('αλλάξουμε.\nΌτι', 'αλλάξουμε.\n\nΌτι')
        text = text.replace('ξεπαγώσει.\nΌτι', 'ξεπαγώσει.\n\nΌτι')
        text = text.replace('ανοίξει.\nΌτι', 'ανοίξει.\n\nΌτι')
        text = text.replace('ελαφρύνει.\nΗ', 'ελαφρύνει.\n\nΗ')
        text = text.replace('πάντα.\nΔεν', 'πάντα.\n\nΔεν')
        text = text.replace('κουβαλάμε.\nΑλλά', 'κουβαλάμε.\n\nΑλλά')
        text = text.replace('χώρο.\nΚαι', 'χώρο.\n\nΚαι')
        text = text.replace('πολυτέλεια.\nΜας', 'πολυτέλεια.\n\nΜας')
        text = text.replace('καθαρά.\nΛίγο', 'καθαρά.\n\nΛίγο')
        text = text.replace('κρατήσαμε.\nΛίγο', 'κρατήσαμε.\n\nΛίγο')
        
        post['text'] = text
        break

# Γράψε το τροποποιημένο JSON πίσω στο αρχείο
with open('c:/Users/OPAP/papantonhs_web/public/data/posts.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Προστέθηκαν επιπλέον line breaks για καλύτερη αναγνωσιμότητα στο κινητό!")
