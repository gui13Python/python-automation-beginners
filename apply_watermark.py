from PyPDF2 import PdfReader, PdfWriter

def apply_watermark(input_pdf, watermark_pdf, output_pdf):
    watermark_reader = PdfReader(watermark_pdf)
    watermark_page = watermark_reader.pages[0]

    pdf_reader = PdfReader(input_pdf)
    pdf_writer = PdfWriter()

    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        page.merge_page(watermark_page)
        pdf_writer.add_page(page)

    with open(output_pdf, "wb") as out_file:
        pdf_writer.write(out_file)

apply_watermark(
    '/home/ubuntu/ebook_automacao_python_v9_temp.pdf',
    '/home/ubuntu/watermark.pdf',
    '/home/ubuntu/ebook_automacao_python_v9_protegido.pdf'
)
