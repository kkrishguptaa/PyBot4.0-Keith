from constants import Client

print("=============================================")
print("Welcome to PyBot4.0!")
print("=============================================")

name = input("What is your name Senor? ")

while True:
    try:
        prompt = input(f"{name}: ")

        response = Client.library.answer.create(question=prompt)

        print(f"PyBot: {response.answer}")

        if prompt.lower() in ["exit", "quit", "bye"]:
            print("PyBot: Goodbye!")
            break
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        continue
