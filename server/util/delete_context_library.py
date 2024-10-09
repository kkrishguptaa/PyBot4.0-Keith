from constants import Client

files = Client.library.files.list()

for file in files:
    print(f"Deleting file {file.name}({file.file_id})...")

    Client.library.files.delete(file_id=file.file_id)

    print(f"File {file.name}({file.file_id}) deleted successfully.")
