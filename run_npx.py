import subprocess

def run():
    subprocess.run(["npx.cmd", "-y", "firebase-tools@latest", "dataconnect:sdk:generate"], cwd="d:/.figma", shell=True)

if __name__ == "__main__":
    run()
