import pandas as pd
from flask import *
from deepface import DeepFace
from pymongo import MongoClient
from flask_mysqldb import MySQL
from flask_cors import CORS
import MySQLdb.cursors
from werkzeug.utils import secure_filename
import os
import io
app = Flask(__name__)


client = MongoClient('mongodb://localhost:27017/')

# Create database named demo if they don't exist already 
db = client['sirs'] 
collection = db['history_data'] 

app.secret_key = '1ABBCD##'
CORS(app)
app.config['SESSION_TYPE'] = 'filesystem'
app.config['MYSQL_HOST'] = "127.0.0.1"
app.config['MYSQL_USER'] = "root"
app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "sirs"


UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

mysql = MySQL(app)

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/test1',methods =['GET','POST'])
def test1():
    print("ok")
    return "<h1>Hello</h1>"

@app.route('/test_connection',methods=['GET','POST'])
def test_connection():
    if request.method == 'POST':
        try:
            # Create a cursor and execute a simple query
            cursor = mysql.connection.cursor()
            cursor.execute("SELECT 1")
            cursor.close()
            return( jsonify({"message": "Database connection is successful!"}))
        except Exception as e:
            return( jsonify({"error": "Could not connect to the database: " + str(e)}), 500)
        
@app.route('/')
def hello():
    return 'Hello World'

def find_face(val):
    dfs = DeepFace.find(
  img_path = val,
  db_path = "C:/Users/offic/OneDrive/Documents/GitHub/Student-Identification-and-Reporting-System/Backend/Faces",
  
)
    
    return dfs

# Uploading files
@app.route('/upload_file',methods=['GET','POST'])
def up_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']

    # If the user does not select a file, the browser submits an empty file
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        res = find_face(filepath)

        # Converting the list into pandas dataframe  
        rdef = pd.DataFrame(res[0])
        # taking the first value of first column and splitting using \\
        person_img_path = rdef['identity'][0].split("\\")
        # Finally splitting using "." for seperation of name and extension
        name = person_img_path[1].split(".")

        # This method is called for testing the connections
        test_connection()

        # initialization of cursor is primary thing for going through mysql
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)

        # execute function is used to execute the query
        cursor.execute("INSERT INTO `history`(`student_id`) VALUES ('{0}')".format(
                    name[0]))
        
        # Commit is mandatory to make the change in database
        mysql.connection.commit()
        print(name[0])
        return jsonify({"msg":'Face is Successfully saved'})
    return jsonify({"error": "File type not allowed"}), 400


@app.route('/recognize',methods=['GET','POST'])
def upload_face():
    if request.method == 'POST':
        data = request.json
        res = find_face()

        # Converting the list into pandas dataframe
        rdef = pd.DataFrame(res[0])
        # taking the first value of first column and splitting using \\
        person_img_path = rdef['identity'][0].split("\\")
        # Finally splitting using "." for seperation of name and extension
        name = person_img_path[1].split(".")

        # This method is called for testing the connections
        test_connection()

        # initialization of cursor is primary thing for going through mysql
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)

        # execute function is used to execute the query
        cursor.execute("INSERT INTO `history`(`student_id`) VALUES ('{0}')".format(
                    name[0]))
        
        # Commit is mandatory to make the change in database
        mysql.connection.commit()
        return str(name[0])
    else:
        return "no it is not post"
    
if __name__ == '__main__':
    app.run(debug=True)