pipeline {

	agent any

	stages {

        stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/catchup_web"
				sh "git clone https://github.com/workshopapps/dinnerwithfriends.web.git"
				sh "sudo cp -r ${WORKSPACE}/catchup_web /home/johnoni/dinnerwithfriends.web"
			}

		}

		stage("build frontend"){

			steps {
				sh "cd dinnerwithfriends.web"
				sh "cd dinnerwithfriends.web && npm i --force && CI=false npm run build"
			}
        }

		stage("deploy") {
		
			steps {
                sh "sudo cp -rf ${WORKSPACE}/catchup_web/build/* /home/johnoni/dinnerwithfriends.web/"
                sh "sudo serve -s /home/johnoni/dinnerwithfriends.web/build -p 3999"
            }
			
	    }
	}
}

