from mongoengine import connect
from models.member import Member
import config
from utils.encryption import encrypt, decrypt

def init_app(app):
    print(config.db_ip)
    print(config.db_port)
    # database config
    db_url = f"mongodb://{config.db_ip}:{config.db_port}/{config.db_col}"
    try:
        conn = connect(
            db="test",
            host=db_url
        )
    except Exception as e:
        print(e)

    populate_db()

def populate_db():
    if checkRoot() == False:
        try:
            root = Member(email=encrypt(config.root_email), 
                            password=Member.hash_string(config.root_password), 
                            role="admin",
                            first_name=encrypt(config.root_name), 
                            last_name=encrypt(config.root_last_name), enabled=True)
            root.save()
            if checkRoot() == False: raise("Failed to create root user")
        except Exception as err:
            raise("Failed to create root user")

def checkRoot():
    members = Member.objects()
    flag = False
    for member in members:
        if decrypt(member.email) == config.root_email:
            flag = True
    return flag
