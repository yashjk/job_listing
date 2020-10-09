class Job < ApplicationRecord

  validates :company_name,:job_title, :role, 
            :level :contract, :location,
            :languages, :tools, presence: true

  validates :job_description, :job_requirements, 
              length: { minimum: 150, maximum: 500 }

  enum role: { Frontend: 0, Backend: 1, FullStack: 2,
                                        Intern: 3 }

  enum level: { Fresher: 0, Junior: 1, Midweight: 2, 
                                        Senior: 3 }
                                        
  enum contract: { FullTime: 0, PartTime: 1, Contract: 2}

end
