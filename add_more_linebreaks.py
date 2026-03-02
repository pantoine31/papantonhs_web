import json
import re

# Διάβασε το αρχείο JSON
with open('c:/Users/OPAP/papantonhs_web/public/data/posts.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Βρες το post με id 13
for post in data:
    if post['id'] == 13:
        text = post['text']
        
        # Χώρισε το κείμενο σε γραμμές για να διατηρήσεις τη δομή
        lines = text.split('\n')
        result_lines = []
        sentence_count = 0
        
        for line in lines:
            # Αν η γραμμή είναι κενή ή separators (------), κράτα την ως έχει
            if line.strip() == '' or line.strip().startswith('------') or line.strip().startswith('«') or line.strip().startswith('['):
                result_lines.append(line)
                sentence_count = 0  # Reset counter σε structural breaks
                continue
            
            # Μέτρα τις προτάσεις στη γραμμή
            # Προτάσεις τελειώνουν με . ; ! ? αλλά όχι με ... ή αριθμούς
            sentences = re.split(r'(?<=[.!;?])\s+(?=[Α-ΩA-Z«Ά-Ώ])', line)
            
            temp_line = ""
            for sentence in sentences:
                if sentence.strip():
                    temp_line += sentence + " "
                    sentence_count += 1
                    
                    # Κάθε 6 προτάσεις, πρόσθεσε extra line break
                    if sentence_count % 6 == 0 and sentence_count > 0:
                        result_lines.append(temp_line.strip())
                        result_lines.append('')  # Πρόσθεσε κενή γραμμή
                        temp_line = ""
            
            # Αν έμεινε κάτι στο temp_line, πρόσθεσέ το
            if temp_line.strip():
                result_lines.append(temp_line.strip())
        
        # Ενώστε τις γραμμές πίσω
        post['text'] = '\n'.join(result_lines)
        break

# Γράψε το τροποποιημένο JSON πίσω στο αρχείο
with open('c:/Users/OPAP/papantonhs_web/public/data/posts.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Προστέθηκαν line breaks ανά 6 προτάσεις!")
