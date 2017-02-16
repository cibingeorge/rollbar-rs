initSidebarItems({"enum":[["Level","Variants for setting the severity level. If not specified, the default value is `ERROR`."]],"macro":[["report_error","Report an error. Any type that implements `error::Error` is accepted."],["report_error_message","Report an error message. Any type that implements `fmt::Display` is accepted."],["report_message","Send a plain text message to Rollbar with severity level `INFO`."],["report_panics","Set a global hook for the `panic`s your application could raise."]],"struct":[["Client","The access point to the library."],["FrameBuilder","Builder for a frame. A collection of frames identifies a stack trace."],["ReportBuilder","Builder for a generic request to Rollbar."],["ReportErrorBuilder","Builder specialized for reporting errors."],["ReportMessageBuilder","Builder specialized for reporting messages."],["ResponseStatus","Wrapper for `hyper::status::StatusCode`."]]});