from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm

def create_diagonal_watermark(output_path, text):
    c = canvas.Canvas(output_path, pagesize=A4)
    width, height = A4
    
    # Configurar fonte e cor com transparência (alpha=0.15 para ser discreto mas visível)
    c.setFont('Helvetica-Bold', 40)
    c.setFillColorRGB(0.7, 0.7, 0.7, alpha=0.15)
    
    # Mover para o centro da página
    c.translate(width / 2, height / 2)
    
    # Rotacionar 45 graus (transversal)
    c.rotate(45)
    
    # Desenhar o texto centralizado na rotação
    # O drawString desenha a partir da esquerda, então ajustamos metade da largura estimada
    text_width = c.stringWidth(text, 'Helvetica-Bold', 40)
    c.drawString(-text_width / 2, 0, text)
    
    c.save()

if __name__ == "__main__":
    create_diagonal_watermark('/home/ubuntu/watermark_diagonal.pdf', '@pytk_solutions - Venda Proibida')
