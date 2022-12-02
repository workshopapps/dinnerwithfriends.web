pipeline {

	agent any

	stages {

        stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/dinnerwithfriends.web"
				sh "git clone https://github.com/workshopapps/dinnerwithfriends.web.git"
				sh "sudo cp -r ${WORKSPACE}/dinnerwithfriends.web /home/johnoni/dinnerwithfriends.web"
			}

		}

		stage("build frontend"){

			steps {
				sh "cd frontend"
				sh "cd frontend && npm i --force && CI=false npm run build"
			}
        }

		stage("deploy") {
		
			steps {
                sh "sudo cp -rf ${WORKSPACE}/frontend/build/* /home/johnoni/dinnerwithfriends.web/frontend"
                sh "sudo serve -s /home/johnoni/dinnerwithfriends.web/frontend/build -p 3999"
            }
			
	    }
	}
}

