FROM python:3.9-slim
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir virtualenv
RUN pip install --no-cache-dir pymupdf python-docx
RUN python -m venv myenv
RUN myenv/bin/pip install --no-cache-dir -r requirements.txt
EXPOSE 5000
CMD ["myenv/bin/python", "app.py"]