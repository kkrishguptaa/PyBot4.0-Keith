from constants import Client, Upload_Folder, Labels_Dict
from os import listdir, path

print("=============================================")
print("Uploading files to AI21 library...")
print("=============================================")

files = listdir(Upload_Folder)

files.remove("labels.json")

for file in files:
    print(f"Found file: {file}")
    if "example" in file.split("."):
        print(f"Skipping example file {file}")
        files.remove(file)
        continue

print("List of files to upload: ", files)

if input("Do you want to continue? (y/n): ") != "y":
    print("User cancelled the operation.")
    exit()

print("Uploading files...")

for file in files:
    labels = Labels_Dict[file] if file in Labels_Dict else []

    print(f"Uploading {file}... with labels {str(labels)}")

    file_id = Client.library.files.create(
        file_path=path.join(Upload_Folder, file), labels=labels
    )

    print(f"File {file} uploaded with ID {file_id}")

print("All files uploaded successfully.")
