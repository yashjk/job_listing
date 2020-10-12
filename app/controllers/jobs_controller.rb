class JobsController < ApplicationController
  before_action :load_job_list, only: [ :index ]
  before_action :job_params, only: [ :create ]

  def index
  end

  def new
  end

  def create
    @job = Job.new(job_params)
    if @job.save
      render status: :ok, json: { notice: "Job listed successfully." }
    else
      render status: :unprocessable_entity, json: { errors: @job.errors.full_messages }
    end
  end

  def show
  end

  private
  
  def job_params
    params.require(:job).permit(:company_name, :job_title, :address, :role, 
    :level, :contract, :location, :job_description, :job_requirements, languages: [], 
    tools: [])
  end

  def load_job
    @job = Job.find(params[:id])
  end

  def load_job_list
    @jobs = Job.order( created_at: :desc )
  end
end
