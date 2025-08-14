"use client"

import { useState, useEffect } from "react"
import { Download, Eye, Trash2, Calendar, User, Phone, Mail, MapPin, Briefcase } from "lucide-react"

interface FormData {
  fullName: string
  gender: string
  phoneNumber: string
  whatsappNumber: string
  emailAddress: string
  location: string
  preferredRole: string
}

interface StoredApplication {
  id: string
  timestamp: string
  data: FormData
}

export default function ApplicationStorage() {
  const [applications, setApplications] = useState<StoredApplication[]>([])
  const [selectedApplication, setSelectedApplication] = useState<StoredApplication | null>(null)

  useEffect(() => {
    const storedApps = localStorage.getItem("internacia_applications")
    if (storedApps) {
      setApplications(JSON.parse(storedApps))
    }
  }, [])

  const deleteApplication = (id: string) => {
    const updatedApps = applications.filter((app) => app.id !== id)
    setApplications(updatedApps)
    localStorage.setItem("internacia_applications", JSON.stringify(updatedApps))
    if (selectedApplication?.id === id) {
      setSelectedApplication(null)
    }
  }

  const exportToCSV = () => {
    if (applications.length === 0) return

    const headers = [
      "Timestamp",
      "Full Name",
      "Gender",
      "Phone Number",
      "WhatsApp Number",
      "Email Address",
      "Location",
      "Preferred Role",
    ]
    const csvContent = [
      headers.join(","),
      ...applications.map((app) =>
        [
          new Date(app.timestamp).toLocaleString(),
          app.data.fullName,
          app.data.gender,
          app.data.phoneNumber,
          app.data.whatsappNumber,
          app.data.emailAddress,
          app.data.location,
          app.data.preferredRole,
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `internacia_applications_${new Date().toISOString().split("T")[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getRoleDisplayName = (role: string) => {
    const roleMap: { [key: string]: string } = {
      "digital-marketing": "Digital Marketing Specialist",
      "system-management": "System Management",
      "customer-relations": "Customer Relations",
      "operations-coordinator": "Operations Coordinator",
      "business-development": "Business Development",
      "team-coordination": "Team Coordination",
    }
    return roleMap[role] || role
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Application Management
            </h1>
            <p className="text-gray-400 mt-2">Total Applications: {applications.length}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportToCSV}
              disabled={applications.length === 0}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Applications List */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-6 text-white">Recent Applications</h2>

              {applications.length === 0 ? (
                <div className="text-center py-12">
                  <User className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No applications submitted yet</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Applications will appear here once candidates submit the form
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {applications.map((app) => (
                    <div
                      key={app.id}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        selectedApplication?.id === app.id
                          ? "border-blue-500 bg-blue-500/10"
                          : "border-gray-600 hover:border-gray-500 bg-gray-700/30"
                      }`}
                      onClick={() => setSelectedApplication(app)}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-white text-lg">{app.data.fullName}</h3>
                          <p className="text-gray-400 text-sm">{getRoleDisplayName(app.data.preferredRole)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedApplication(app)
                            }}
                            className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 rounded-lg transition-all duration-300"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteApplication(app.id)
                            }}
                            className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all duration-300"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(app.timestamp)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="w-3 h-3" />
                          <span>{app.data.phoneNumber}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Application Details */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6 text-white">Application Details</h2>

              {selectedApplication ? (
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b border-gray-600">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{selectedApplication.data.fullName}</h3>
                    <p className="text-gray-400 text-sm mt-1">{selectedApplication.data.gender}</p>
                    <p className="text-blue-400 text-sm mt-2">
                      {getRoleDisplayName(selectedApplication.data.preferredRole)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm">Phone Number</p>
                        <p className="text-white font-medium">{selectedApplication.data.phoneNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm">WhatsApp Number</p>
                        <p className="text-white font-medium">{selectedApplication.data.whatsappNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm">Email Address</p>
                        <p className="text-white font-medium break-all">{selectedApplication.data.emailAddress}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-medium">{selectedApplication.data.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Briefcase className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm">Preferred Role</p>
                        <p className="text-white font-medium">
                          {getRoleDisplayName(selectedApplication.data.preferredRole)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-rose-400 mt-0.5" />
                      <div>
                        <p className="text-gray-400 text-sm">Application Date</p>
                        <p className="text-white font-medium">{formatDate(selectedApplication.timestamp)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-600">
                    <div className="flex gap-3">
                      <a
                        href={`tel:${selectedApplication.data.phoneNumber}`}
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm"
                      >
                        Call
                      </a>
                      <a
                        href={`https://wa.me/${selectedApplication.data.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Eye className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">Select an application to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
