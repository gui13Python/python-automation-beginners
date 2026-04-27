from PyPDF2 import PdfReader, PdfWriter

def apply_watermark(input_pdf, watermark_pdf, output_pdf):
    watermark_reader = PdfReader(watermark_pdf)
    watermark_page = watermark_reader.pages[0]

    pdf_reader = PdfReader(input_pdf)
    pdf_writer = PdfWriter()

    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        # Mesclar a marca d'água SOBRE a página atual
        page.merge_page(watermark_page)
        pdf_writer.add_page(page)

    with open(output_pdf, "wb") as out_file:
        pdf_writer.write(out_file)

if __name__ == "__main__":
    apply_watermark(
        '/home/ubuntu/ebook_automacao_python_v9_temp.pdf',
        '/home/ubuntu/watermark_diagonal.pdf',
        '/home/ubuntu/ebook_automacao_python_v10_final_protegido.pdf'
    )
