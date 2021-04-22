var Constants = require('../util/Constants');

function logConfiguration(){

    /*Logging Parameters */
    this.logDirectory;
    this.logFilename;
    this.logFileMaxSize;
    this.loggingLevel;
    this.maxLogFiles;
    
    logConfiguration.prototype.getLogDirectory = function getLogDirectory(){
        return this.logDirectory;
    }

    logConfiguration.prototype.getLogFilename = function getLogFilename(){
        return this.logFilename;
    }

    logConfiguration.prototype.getLogFileMaxSize = function getLogFileMaxSize(){
        return this.logFileMaxSize;
    }

    logConfiguration.prototype.getLoggingLevel = function getLoggingLevel(){
        return this.loggingLevel;
    }

    logConfiguration.prototype.getMaxLogFiles = function getMaxLogFiles(){
        return this.maxLogFiles;
    }

    logConfiguration.prototype.setLogDirectory = function setLogDirectory(logDirectory){
        this.logDirectory = logDirectory;
    }

    logConfiguration.prototype.setLogFilename = function setLogFilename(logFilename){
        this.logFilename = logFilename;
    }

    logConfiguration.prototype.setLogFileMaxSize = function setLogFileMaxSize(logFileMaxSize){
        this.logFileMaxSize = logFileMaxSize;
    }

    logConfiguration.prototype.setLoggingLevel = function setLoggingLevel(loggingLevel){
        this.loggingLevel = loggingLevel;
    }

    logConfiguration.prototype.setMaxLogFiles = function setMaxLogFiles(maxLogFiles){
        this.maxLogFiles = maxLogFiles;
    }

    logConfiguration.prototype.getDefaultLogDirectory = function getDefaultLogDirectory(){
        var fs = require('fs');
        var path = require('path');
        if (this.logDirectory === null || this.logDirectory === "" || this.logDirectory === undefined) {
            this.logDirectory = Constants.DEFAULT_LOG_DIRECTORY;
            if (!fs.existsSync(this.logDirectory) && this.enableLog === true) {
                fs.mkdir(path.resolve(this.logDirectory), function (err) {
                    if (err)
                        throw err;
                })
            }
        }
        else if (!fs.existsSync(this.logDirectory)) {
            this.logDirectory = Constants.DEFAULT_LOG_DIRECTORY;
            warningMessage += Constants.INVALID_LOGDIRECTORY;
            if (!fs.existsSync(this.logDirectory) && this.enableLog === true) {
                fs.mkdir(path.resolve(this.logDirectory), function (err) {
                    if (err)
                        throw err;
                })
            }
        }
    }

    logConfiguration.prototype.getDefaultLogFilename = function getDefaultLogFilename(){
        if (this.logFilename === null || this.logFilename === "" || this.logFilename === undefined) {
            this.logFilename = Constants.DEFAULT_LOG_FILENAME;
        }
    }

    logConfiguration.prototype.getDefaultLogFileMaxSize = function getDefaultLogFileMaxSize(){
        if (this.logFileMaxSize === null || this.logFileMaxSize === "" || this.logFileMaxSize === undefined) {
            this.logFileMaxSize = Constants.DEFAULT_LOG_SIZE;
        }
    }

    logConfiguration.prototype.getDefaultLoggingLevel = function getDefaultLoggingLevel(){
        if (this.loggingLevel === null || this.loggingLevel === "" || this.loggingLevel === undefined) {
            this.loggingLevel = Constants.DEFAULT_LOGGING_LEVEL;
        }
    }

    logConfiguration.prototype.getDefaultMaxLogFiles = function getDefaultMaxLogFiles(){
        if (this.maxLogFiles === null || this.maxLogFiles === "" || this.maxLogFiles === undefined) {
            this.maxLogFiles = Constants.DEFAULT_MAX_LOG_FILES;
        }
    }
}

exports.logConfiguration = logConfiguration;