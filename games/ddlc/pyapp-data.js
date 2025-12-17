
  var Module = typeof Module !== 'undefined' ? Module : {};
  
  if (!Module.expectedDataFileDownloads) {
    Module.expectedDataFileDownloads = 0;
  }
  Module.expectedDataFileDownloads++;
  (function() {
   var loadPackage = function(metadata) {
  
      var PACKAGE_PATH;
      if (typeof window === 'object') {
        PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
      } else if (typeof location !== 'undefined') {
        // worker
        PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
      } else {
        throw 'using preloaded data can only be done on a web page or in a web worker';
      }
      var PACKAGE_NAME = 'pyapp.data';
      var REMOTE_PACKAGE_BASE = 'pyapp.data';
      if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
        Module['locateFile'] = Module['locateFilePackage'];
        err('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
      }
      var REMOTE_PACKAGE_NAME = Module['locateFile'] ? Module['locateFile'](REMOTE_PACKAGE_BASE, '') : REMOTE_PACKAGE_BASE;
    
      var REMOTE_PACKAGE_SIZE = metadata['remote_package_size'];
      var PACKAGE_UUID = metadata['package_uuid'];
    
      function fetchRemotePackage(packageName, packageSize, callback, errback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', packageName, true);
        xhr.responseType = 'arraybuffer';
        xhr.onprogress = function(event) {
          var url = packageName;
          var size = packageSize;
          if (event.total) size = event.total;
          if (event.loaded) {
            if (!xhr.addedTotal) {
              xhr.addedTotal = true;
              if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
              Module.dataFileDownloads[url] = {
                loaded: event.loaded,
                total: size
              };
            } else {
              Module.dataFileDownloads[url].loaded = event.loaded;
            }
            var total = 0;
            var loaded = 0;
            var num = 0;
            for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
              total += data.total;
              loaded += data.loaded;
              num++;
            }
            total = Math.ceil(total * Module.expectedDataFileDownloads/num);
            if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
          } else if (!Module.dataFileDownloads) {
            if (Module['setStatus']) Module['setStatus']('Downloading data...');
          }
        };
        xhr.onerror = function(event) {
          throw new Error("NetworkError for: " + packageName);
        }
        xhr.onload = function(event) {
          if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            var packageData = xhr.response;
            callback(packageData);
          } else {
            throw new Error(xhr.statusText + " : " + xhr.responseURL);
          }
        };
        xhr.send(null);
      };

      function handleError(error) {
        console.error('package error:', error);
      };
    
    function runWithFS() {
  
      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
  Module['FS_createPath']("/", "_dummy_thread", true, true);
Module['FS_createPath']("/", "http", true, true);
Module['FS_createPath']("/", "xmlrpc", true, true);
Module['FS_createPath']("/", "_thread", true, true);
Module['FS_createPath']("/", "libpasteurize", true, true);
Module['FS_createPath']("/libpasteurize", "fixes", true, true);
Module['FS_createPath']("/", "six-1.12.0.dist-info", true, true);
Module['FS_createPath']("/", "socketserver", true, true);
Module['FS_createPath']("/", "past", true, true);
Module['FS_createPath']("/past", "builtins", true, true);
Module['FS_createPath']("/past", "types", true, true);
Module['FS_createPath']("/past", "utils", true, true);
Module['FS_createPath']("/past", "translation", true, true);
Module['FS_createPath']("/", "builtins", true, true);
Module['FS_createPath']("/", "libfuturize", true, true);
Module['FS_createPath']("/libfuturize", "fixes", true, true);
Module['FS_createPath']("/", "bin", true, true);
Module['FS_createPath']("/", "ecdsa-0.18.0.dist-info", true, true);
Module['FS_createPath']("/", "html", true, true);
Module['FS_createPath']("/", "ecdsa", true, true);
Module['FS_createPath']("/", "lib", true, true);
Module['FS_createPath']("/lib", "python2.7", true, true);
Module['FS_createPath']("/lib/python2.7", "site-packages", true, true);
Module['FS_createPath']("/lib/python2.7/site-packages", "pygame_sdl2", true, true);
Module['FS_createPath']("/lib/python2.7/site-packages/pygame_sdl2", "threads", true, true);
Module['FS_createPath']("/", "_markupbase", true, true);
Module['FS_createPath']("/", "future-0.18.2.dist-info", true, true);
Module['FS_createPath']("/", "future", true, true);
Module['FS_createPath']("/future", "builtins", true, true);
Module['FS_createPath']("/future", "backports", true, true);
Module['FS_createPath']("/future/backports", "http", true, true);
Module['FS_createPath']("/future/backports", "xmlrpc", true, true);
Module['FS_createPath']("/future/backports", "html", true, true);
Module['FS_createPath']("/future/backports", "email", true, true);
Module['FS_createPath']("/future/backports/email", "mime", true, true);
Module['FS_createPath']("/future/backports", "test", true, true);
Module['FS_createPath']("/future/backports", "urllib", true, true);
Module['FS_createPath']("/future", "standard_library", true, true);
Module['FS_createPath']("/future", "tests", true, true);
Module['FS_createPath']("/future", "moves", true, true);
Module['FS_createPath']("/future/moves", "dbm", true, true);
Module['FS_createPath']("/future/moves", "http", true, true);
Module['FS_createPath']("/future/moves", "xmlrpc", true, true);
Module['FS_createPath']("/future/moves", "html", true, true);
Module['FS_createPath']("/future/moves", "test", true, true);
Module['FS_createPath']("/future/moves", "urllib", true, true);
Module['FS_createPath']("/future/moves", "tkinter", true, true);
Module['FS_createPath']("/future", "types", true, true);
Module['FS_createPath']("/future", "utils", true, true);
Module['FS_createPath']("/", "copyreg", true, true);
Module['FS_createPath']("/", "winreg", true, true);
Module['FS_createPath']("/", "typing-3.10.0.0.dist-info", true, true);
Module['FS_createPath']("/", "queue", true, true);
Module['FS_createPath']("/", "tkinter", true, true);
Module['FS_createPath']("/", "reprlib", true, true);

          /** @constructor */
          function DataRequest(start, end, audio) {
            this.start = start;
            this.end = end;
            this.audio = audio;
          }
          DataRequest.prototype = {
            requests: {},
            open: function(mode, name) {
              this.name = name;
              this.requests[name] = this;
              Module['addRunDependency']('fp ' + this.name);
            },
            send: function() {},
            onload: function() {
              var byteArray = this.byteArray.subarray(this.start, this.end);
              this.finish(byteArray);
            },
            finish: function(byteArray) {
              var that = this;
      
          Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
          Module['removeRunDependency']('fp ' + that.name);
  
              this.requests[this.name] = null;
            }
          };
      
              var files = metadata['files'];
              for (var i = 0; i < files.length; ++i) {
                new DataRequest(files[i]['start'], files[i]['end'], files[i]['audio']).open('GET', files[i]['filename']);
              }
      
        
        var indexedDB;
        if (typeof window === 'object') {
          indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        } else if (typeof location !== 'undefined') {
          // worker
          indexedDB = self.indexedDB;
        } else {
          throw 'using IndexedDB to cache data can only be done on a web page or in a web worker';
        }
        var IDB_RO = "readonly";
        var IDB_RW = "readwrite";
        var DB_NAME = "EM_PRELOAD_CACHE";
        var DB_VERSION = 1;
        var METADATA_STORE_NAME = 'METADATA';
        var PACKAGE_STORE_NAME = 'PACKAGES';
        function openDatabase(callback, errback) {
          try {
            var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
          } catch (e) {
            return errback(e);
          }
          openRequest.onupgradeneeded = function(event) {
            var db = event.target.result;

            if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
              db.deleteObjectStore(PACKAGE_STORE_NAME);
            }
            var packages = db.createObjectStore(PACKAGE_STORE_NAME);

            if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
              db.deleteObjectStore(METADATA_STORE_NAME);
            }
            var metadata = db.createObjectStore(METADATA_STORE_NAME);
          };
          openRequest.onsuccess = function(event) {
            var db = event.target.result;
            callback(db);
          };
          openRequest.onerror = function(error) {
            errback(error);
          };
        };

        // This is needed as chromium has a limit on per-entry files in IndexedDB
        // https://cs.chromium.org/chromium/src/content/renderer/indexed_db/webidbdatabase_impl.cc?type=cs&sq=package:chromium&g=0&l=177
        // https://cs.chromium.org/chromium/src/out/Debug/gen/third_party/blink/public/mojom/indexeddb/indexeddb.mojom.h?type=cs&sq=package:chromium&g=0&l=60
        // We set the chunk size to 64MB to stay well-below the limit
        var CHUNK_SIZE = 64 * 1024 * 1024;

        function cacheRemotePackage(
          db,
          packageName,
          packageData,
          packageMeta,
          callback,
          errback
        ) {
          var transactionPackages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
          var packages = transactionPackages.objectStore(PACKAGE_STORE_NAME);
          var chunkSliceStart = 0;
          var nextChunkSliceStart = 0;
          var chunkCount = Math.ceil(packageData.byteLength / CHUNK_SIZE);
          var finishedChunks = 0;
          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            nextChunkSliceStart += CHUNK_SIZE;
            var putPackageRequest = packages.put(
              packageData.slice(chunkSliceStart, nextChunkSliceStart),
              'package/' + packageName + '/' + chunkId
            );
            chunkSliceStart = nextChunkSliceStart;
            putPackageRequest.onsuccess = function(event) {
              finishedChunks++;
              if (finishedChunks == chunkCount) {
                var transaction_metadata = db.transaction(
                  [METADATA_STORE_NAME],
                  IDB_RW
                );
                var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
                var putMetadataRequest = metadata.put(
                  {
                    'uuid': packageMeta.uuid,
                    'chunkCount': chunkCount
                  },
                  'metadata/' + packageName
                );
                putMetadataRequest.onsuccess = function(event) {
                  callback(packageData);
                };
                putMetadataRequest.onerror = function(error) {
                  errback(error);
                };
              }
            };
            putPackageRequest.onerror = function(error) {
              errback(error);
            };
          }
        }

        /* Check if there's a cached package, and if so whether it's the latest available */
        function checkCachedPackage(db, packageName, callback, errback) {
          var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
          var metadata = transaction.objectStore(METADATA_STORE_NAME);
          var getRequest = metadata.get('metadata/' + packageName);
          getRequest.onsuccess = function(event) {
            var result = event.target.result;
            if (!result) {
              return callback(false, null);
            } else {
              return callback(PACKAGE_UUID === result['uuid'], result);
            }
          };
          getRequest.onerror = function(error) {
            errback(error);
          };
        }

        function fetchCachedPackage(db, packageName, metadata, callback, errback) {
          var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
          var packages = transaction.objectStore(PACKAGE_STORE_NAME);

          var chunksDone = 0;
          var totalSize = 0;
          var chunkCount = metadata['chunkCount'];
          var chunks = new Array(chunkCount);

          for (var chunkId = 0; chunkId < chunkCount; chunkId++) {
            var getRequest = packages.get('package/' + packageName + '/' + chunkId);
            getRequest.onsuccess = function(event) {
              // If there's only 1 chunk, there's nothing to concatenate it with so we can just return it now
              if (chunkCount == 1) {
                callback(event.target.result);
              } else {
                chunksDone++;
                totalSize += event.target.result.byteLength;
                chunks.push(event.target.result);
                if (chunksDone == chunkCount) {
                  if (chunksDone == 1) {
                    callback(event.target.result);
                  } else {
                    var tempTyped = new Uint8Array(totalSize);
                    var byteOffset = 0;
                    for (var chunkId in chunks) {
                      var buffer = chunks[chunkId];
                      tempTyped.set(new Uint8Array(buffer), byteOffset);
                      byteOffset += buffer.byteLength;
                      buffer = undefined;
                    }
                    chunks = undefined;
                    callback(tempTyped.buffer);
                    tempTyped = undefined;
                  }
                }
              }
            };
            getRequest.onerror = function(error) {
              errback(error);
            };
          }
        }
      
      function processPackageData(arrayBuffer) {
        assert(arrayBuffer, 'Loading data file failed.');
        assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
        var byteArray = new Uint8Array(arrayBuffer);
        var curr;
        
          // Reuse the bytearray from the XHR as the source for file reads.
          DataRequest.prototype.byteArray = byteArray;
    
            var files = metadata['files'];
            for (var i = 0; i < files.length; ++i) {
              DataRequest.prototype.requests[files[i].filename].onload();
            }
                Module['removeRunDependency']('datafile_pyapp.data');

      };
      Module['addRunDependency']('datafile_pyapp.data');
    
      if (!Module.preloadResults) Module.preloadResults = {};
    
        function preloadFallback(error) {
          console.error(error);
          console.error('falling back to default preload behavior');
          fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
        };

        openDatabase(
          function(db) {
            checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
              function(useCached, metadata) {
                Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
                if (useCached) {
                  fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, metadata, processPackageData, preloadFallback);
                } else {
                  fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                    function(packageData) {
                      cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                        function(error) {
                          console.error(error);
                          processPackageData(packageData);
                        });
                    }
                  , preloadFallback);
                }
              }
            , preloadFallback);
          }
        , preloadFallback);

        if (Module['setStatus']) Module['setStatus']('Downloading...');
      
    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }
  
   }
   loadPackage({"files": [{"filename": "/web-presplash-default.jpg", "start": 0, "end": 224232, "audio": 0}, {"filename": "/six.pyo", "start": 224232, "end": 251851, "audio": 0}, {"filename": "/typing.pyo", "start": 251851, "end": 321357, "audio": 0}, {"filename": "/_dummy_thread/__init__.pyo", "start": 321357, "end": 321884, "audio": 0}, {"filename": "/http/cookies.pyo", "start": 321884, "end": 322149, "audio": 0}, {"filename": "/http/client.pyo", "start": 322149, "end": 324437, "audio": 0}, {"filename": "/http/__init__.pyo", "start": 324437, "end": 324878, "audio": 0}, {"filename": "/http/cookiejar.pyo", "start": 324878, "end": 325109, "audio": 0}, {"filename": "/http/server.pyo", "start": 325109, "end": 325587, "audio": 0}, {"filename": "/xmlrpc/client.pyo", "start": 325587, "end": 325817, "audio": 0}, {"filename": "/xmlrpc/__init__.pyo", "start": 325817, "end": 326260, "audio": 0}, {"filename": "/xmlrpc/server.pyo", "start": 326260, "end": 326490, "audio": 0}, {"filename": "/_thread/__init__.pyo", "start": 326490, "end": 327005, "audio": 0}, {"filename": "/libpasteurize/__init__.pyo", "start": 327005, "end": 327119, "audio": 0}, {"filename": "/libpasteurize/main.pyo", "start": 327119, "end": 332314, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_future_builtins.pyo", "start": 332314, "end": 333802, "audio": 0}, {"filename": "/libpasteurize/fixes/__init__.pyo", "start": 333802, "end": 334732, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_imports2.pyo", "start": 334732, "end": 344473, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_features.pyo", "start": 344473, "end": 347512, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_raise_.pyo", "start": 347512, "end": 349012, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_getcwd.pyo", "start": 349012, "end": 350098, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_newstyle.pyo", "start": 350098, "end": 351423, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_unpacking.pyo", "start": 351423, "end": 356603, "audio": 0}, {"filename": "/libpasteurize/fixes/feature_base.pyo", "start": 356603, "end": 358284, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_division.pyo", "start": 358284, "end": 359407, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_memoryview.pyo", "start": 359407, "end": 360283, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_throw.pyo", "start": 360283, "end": 361558, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_all_future_builtins.pyo", "start": 361558, "end": 362438, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_future_standard_library_import.pyo", "start": 362438, "end": 363310, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_next.pyo", "start": 363310, "end": 364948, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_imports.pyo", "start": 364948, "end": 368918, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_annotations.pyo", "start": 368918, "end": 370708, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_raise.pyo", "start": 370708, "end": 372189, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_printfunction.pyo", "start": 372189, "end": 372966, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_kwargs.pyo", "start": 372966, "end": 376670, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_fullargspec.pyo", "start": 376670, "end": 377536, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_add_all__future__imports.pyo", "start": 377536, "end": 378447, "audio": 0}, {"filename": "/libpasteurize/fixes/fix_metaclass.pyo", "start": 378447, "end": 380804, "audio": 0}, {"filename": "/six-1.12.0.dist-info/top_level.txt", "start": 380804, "end": 380808, "audio": 0}, {"filename": "/six-1.12.0.dist-info/METADATA", "start": 380808, "end": 382748, "audio": 0}, {"filename": "/six-1.12.0.dist-info/RECORD", "start": 382748, "end": 383285, "audio": 0}, {"filename": "/six-1.12.0.dist-info/INSTALLER", "start": 383285, "end": 383289, "audio": 0}, {"filename": "/six-1.12.0.dist-info/LICENSE", "start": 383289, "end": 384355, "audio": 0}, {"filename": "/six-1.12.0.dist-info/WHEEL", "start": 384355, "end": 384465, "audio": 0}, {"filename": "/socketserver/__init__.pyo", "start": 384465, "end": 384952, "audio": 0}, {"filename": "/past/__init__.pyo", "start": 384952, "end": 385242, "audio": 0}, {"filename": "/past/builtins/noniterators.pyo", "start": 385242, "end": 387365, "audio": 0}, {"filename": "/past/builtins/__init__.pyo", "start": 387365, "end": 388461, "audio": 0}, {"filename": "/past/builtins/misc.pyo", "start": 388461, "end": 390798, "audio": 0}, {"filename": "/past/types/__init__.pyo", "start": 390798, "end": 391323, "audio": 0}, {"filename": "/past/types/oldstr.pyo", "start": 391323, "end": 393889, "audio": 0}, {"filename": "/past/types/basestring.pyo", "start": 393889, "end": 394931, "audio": 0}, {"filename": "/past/types/olddict.pyo", "start": 394931, "end": 396693, "audio": 0}, {"filename": "/past/utils/__init__.pyo", "start": 396693, "end": 398172, "audio": 0}, {"filename": "/past/translation/__init__.pyo", "start": 398172, "end": 408046, "audio": 0}, {"filename": "/builtins/__init__.pyo", "start": 408046, "end": 408599, "audio": 0}, {"filename": "/libfuturize/__init__.pyo", "start": 408599, "end": 408711, "audio": 0}, {"filename": "/libfuturize/fixer_util.pyo", "start": 408711, "end": 419360, "audio": 0}, {"filename": "/libfuturize/main.pyo", "start": 419360, "end": 427452, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_builtins.pyo", "start": 427452, "end": 429034, "audio": 0}, {"filename": "/libfuturize/fixes/fix_object.pyo", "start": 429034, "end": 429772, "audio": 0}, {"filename": "/libfuturize/fixes/fix_print_with_import.pyo", "start": 429772, "end": 430548, "audio": 0}, {"filename": "/libfuturize/fixes/__init__.pyo", "start": 430548, "end": 432914, "audio": 0}, {"filename": "/libfuturize/fixes/fix_absolute_import.pyo", "start": 432914, "end": 434978, "audio": 0}, {"filename": "/libfuturize/fixes/fix_cmp.pyo", "start": 434978, "end": 435985, "audio": 0}, {"filename": "/libfuturize/fixes/fix_add__future__imports_except_unicode_literals.pyo", "start": 435985, "end": 436932, "audio": 0}, {"filename": "/libfuturize/fixes/fix_basestring.pyo", "start": 436932, "end": 437682, "audio": 0}, {"filename": "/libfuturize/fixes/fix_division.pyo", "start": 437682, "end": 437888, "audio": 0}, {"filename": "/libfuturize/fixes/fix_input.pyo", "start": 437888, "end": 438600, "audio": 0}, {"filename": "/libfuturize/fixes/fix_division_safe.pyo", "start": 438600, "end": 441448, "audio": 0}, {"filename": "/libfuturize/fixes/fix_execfile.pyo", "start": 441448, "end": 442480, "audio": 0}, {"filename": "/libfuturize/fixes/fix_unicode_literals_import.pyo", "start": 442480, "end": 443287, "audio": 0}, {"filename": "/libfuturize/fixes/fix_order___future__imports.pyo", "start": 443287, "end": 444052, "audio": 0}, {"filename": "/libfuturize/fixes/fix_bytes.pyo", "start": 444052, "end": 445006, "audio": 0}, {"filename": "/libfuturize/fixes/fix_raise.pyo", "start": 445006, "end": 447044, "audio": 0}, {"filename": "/libfuturize/fixes/fix_print.pyo", "start": 447044, "end": 449325, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_standard_library_urllib.pyo", "start": 449325, "end": 450222, "audio": 0}, {"filename": "/libfuturize/fixes/fix_UserDict.pyo", "start": 450222, "end": 452681, "audio": 0}, {"filename": "/libfuturize/fixes/fix_xrange_with_import.pyo", "start": 452681, "end": 453442, "audio": 0}, {"filename": "/libfuturize/fixes/fix_remove_old__future__imports.pyo", "start": 453442, "end": 454330, "audio": 0}, {"filename": "/libfuturize/fixes/fix_unicode_keep_u.pyo", "start": 454330, "end": 455214, "audio": 0}, {"filename": "/libfuturize/fixes/fix_oldstr_wrap.pyo", "start": 455214, "end": 456512, "audio": 0}, {"filename": "/libfuturize/fixes/fix_next_call.pyo", "start": 456512, "end": 459576, "audio": 0}, {"filename": "/libfuturize/fixes/fix_metaclass.pyo", "start": 459576, "end": 465138, "audio": 0}, {"filename": "/libfuturize/fixes/fix_future_standard_library.pyo", "start": 465138, "end": 465957, "audio": 0}, {"filename": "/bin/pasteurize", "start": 465957, "end": 466260, "audio": 0}, {"filename": "/bin/futurize", "start": 466260, "end": 466561, "audio": 0}, {"filename": "/ecdsa-0.18.0.dist-info/top_level.txt", "start": 466561, "end": 466567, "audio": 0}, {"filename": "/ecdsa-0.18.0.dist-info/METADATA", "start": 466567, "end": 496317, "audio": 0}, {"filename": "/ecdsa-0.18.0.dist-info/RECORD", "start": 496317, "end": 499674, "audio": 0}, {"filename": "/ecdsa-0.18.0.dist-info/INSTALLER", "start": 499674, "end": 499678, "audio": 0}, {"filename": "/ecdsa-0.18.0.dist-info/LICENSE", "start": 499678, "end": 500825, "audio": 0}, {"filename": "/ecdsa-0.18.0.dist-info/WHEEL", "start": 500825, "end": 500935, "audio": 0}, {"filename": "/html/__init__.pyo", "start": 500935, "end": 501419, "audio": 0}, {"filename": "/html/entities.pyo", "start": 501419, "end": 501738, "audio": 0}, {"filename": "/html/parser.pyo", "start": 501738, "end": 502154, "audio": 0}, {"filename": "/ecdsa/test_ellipticcurve.pyo", "start": 502154, "end": 509874, "audio": 0}, {"filename": "/ecdsa/eddsa.pyo", "start": 509874, "end": 517091, "audio": 0}, {"filename": "/ecdsa/test_ecdsa.pyo", "start": 517091, "end": 537075, "audio": 0}, {"filename": "/ecdsa/__init__.pyo", "start": 537075, "end": 538618, "audio": 0}, {"filename": "/ecdsa/test_malformed_sigs.pyo", "start": 538618, "end": 548344, "audio": 0}, {"filename": "/ecdsa/rfc6979.pyo", "start": 548344, "end": 550247, "audio": 0}, {"filename": "/ecdsa/curves.pyo", "start": 550247, "end": 560382, "audio": 0}, {"filename": "/ecdsa/keys.pyo", "start": 560382, "end": 579094, "audio": 0}, {"filename": "/ecdsa/numbertheory.pyo", "start": 579094, "end": 592287, "audio": 0}, {"filename": "/ecdsa/test_numbertheory.pyo", "start": 592287, "end": 607790, "audio": 0}, {"filename": "/ecdsa/ecdh.pyo", "start": 607790, "end": 612548, "audio": 0}, {"filename": "/ecdsa/test_keys.pyo", "start": 612548, "end": 645678, "audio": 0}, {"filename": "/ecdsa/_rwlock.pyo", "start": 645678, "end": 647932, "audio": 0}, {"filename": "/ecdsa/der.pyo", "start": 647932, "end": 657671, "audio": 0}, {"filename": "/ecdsa/test_der.pyo", "start": 657671, "end": 678339, "audio": 0}, {"filename": "/ecdsa/_compat.pyo", "start": 678339, "end": 683380, "audio": 0}, {"filename": "/ecdsa/errors.pyo", "start": 683380, "end": 683675, "audio": 0}, {"filename": "/ecdsa/util.pyo", "start": 683675, "end": 692751, "audio": 0}, {"filename": "/ecdsa/test_pyecdsa.pyo", "start": 692751, "end": 764518, "audio": 0}, {"filename": "/ecdsa/test_eddsa.pyo", "start": 764518, "end": 795611, "audio": 0}, {"filename": "/ecdsa/ellipticcurve.pyo", "start": 795611, "end": 829012, "audio": 0}, {"filename": "/ecdsa/test_curves.pyo", "start": 829012, "end": 843011, "audio": 0}, {"filename": "/ecdsa/test_rw_lock.pyo", "start": 843011, "end": 848548, "audio": 0}, {"filename": "/ecdsa/test_jacobi.pyo", "start": 848548, "end": 867716, "audio": 0}, {"filename": "/ecdsa/_version.pyo", "start": 867716, "end": 868187, "audio": 0}, {"filename": "/ecdsa/ecdsa.pyo", "start": 868187, "end": 884491, "audio": 0}, {"filename": "/ecdsa/test_ecdh.pyo", "start": 884491, "end": 898485, "audio": 0}, {"filename": "/ecdsa/_sha3.pyo", "start": 898485, "end": 902265, "audio": 0}, {"filename": "/ecdsa/test_sha3.pyo", "start": 902265, "end": 905503, "audio": 0}, {"filename": "/lib/python2.7/threading.pyo", "start": 905503, "end": 909941, "audio": 0}, {"filename": "/lib/python2.7/subprocess.pyo", "start": 909941, "end": 910057, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/__init__.pyo", "start": 910057, "end": 914963, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/compat.pyo", "start": 914963, "end": 918341, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/time.pyo", "start": 918341, "end": 918530, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/version.pyo", "start": 918530, "end": 919026, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/sysfont.pyo", "start": 919026, "end": 939132, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/sprite.pyo", "start": 939132, "end": 967353, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/threads/__init__.pyo", "start": 967353, "end": 973670, "audio": 0}, {"filename": "/lib/python2.7/site-packages/pygame_sdl2/threads/Py25Queue.pyo", "start": 973670, "end": 979221, "audio": 0}, {"filename": "/_markupbase/__init__.pyo", "start": 979221, "end": 979744, "audio": 0}, {"filename": "/future-0.18.2.dist-info/top_level.txt", "start": 979744, "end": 979892, "audio": 0}, {"filename": "/future-0.18.2.dist-info/entry_points.txt", "start": 979892, "end": 979981, "audio": 0}, {"filename": "/future-0.18.2.dist-info/DESCRIPTION.rst", "start": 979981, "end": 982644, "audio": 0}, {"filename": "/future-0.18.2.dist-info/METADATA", "start": 982644, "end": 986346, "audio": 0}, {"filename": "/future-0.18.2.dist-info/metadata.json", "start": 986346, "end": 987766, "audio": 0}, {"filename": "/future-0.18.2.dist-info/RECORD", "start": 987766, "end": 1017912, "audio": 0}, {"filename": "/future-0.18.2.dist-info/LICENSE.txt", "start": 1017912, "end": 1018995, "audio": 0}, {"filename": "/future-0.18.2.dist-info/INSTALLER", "start": 1018995, "end": 1018999, "audio": 0}, {"filename": "/future-0.18.2.dist-info/WHEEL", "start": 1018999, "end": 1019092, "audio": 0}, {"filename": "/future/__init__.pyo", "start": 1019092, "end": 1019555, "audio": 0}, {"filename": "/future/builtins/__init__.pyo", "start": 1019555, "end": 1020798, "audio": 0}, {"filename": "/future/builtins/newsuper.pyo", "start": 1020798, "end": 1022601, "audio": 0}, {"filename": "/future/builtins/newnext.pyo", "start": 1022601, "end": 1023289, "audio": 0}, {"filename": "/future/builtins/newround.pyo", "start": 1023289, "end": 1025194, "audio": 0}, {"filename": "/future/builtins/iterators.pyo", "start": 1025194, "end": 1025819, "audio": 0}, {"filename": "/future/builtins/new_min_max.pyo", "start": 1025819, "end": 1027461, "audio": 0}, {"filename": "/future/builtins/misc.pyo", "start": 1027461, "end": 1029223, "audio": 0}, {"filename": "/future/builtins/disabled.pyo", "start": 1029223, "end": 1030248, "audio": 0}, {"filename": "/future/backports/_markupbase.pyo", "start": 1030248, "end": 1038860, "audio": 0}, {"filename": "/future/backports/__init__.pyo", "start": 1038860, "end": 1039505, "audio": 0}, {"filename": "/future/backports/socketserver.pyo", "start": 1039505, "end": 1053143, "audio": 0}, {"filename": "/future/backports/socket.pyo", "start": 1053143, "end": 1063762, "audio": 0}, {"filename": "/future/backports/misc.pyo", "start": 1063762, "end": 1085600, "audio": 0}, {"filename": "/future/backports/datetime.pyo", "start": 1085600, "end": 1136080, "audio": 0}, {"filename": "/future/backports/total_ordering.pyo", "start": 1136080, "end": 1138706, "audio": 0}, {"filename": "/future/backports/http/cookies.pyo", "start": 1138706, "end": 1153931, "audio": 0}, {"filename": "/future/backports/http/client.pyo", "start": 1153931, "end": 1183437, "audio": 0}, {"filename": "/future/backports/http/__init__.pyo", "start": 1183437, "end": 1183559, "audio": 0}, {"filename": "/future/backports/http/cookiejar.pyo", "start": 1183559, "end": 1231765, "audio": 0}, {"filename": "/future/backports/http/server.pyo", "start": 1231765, "end": 1261956, "audio": 0}, {"filename": "/future/backports/xmlrpc/client.pyo", "start": 1261956, "end": 1296638, "audio": 0}, {"filename": "/future/backports/xmlrpc/__init__.pyo", "start": 1296638, "end": 1296762, "audio": 0}, {"filename": "/future/backports/xmlrpc/server.pyo", "start": 1296762, "end": 1318612, "audio": 0}, {"filename": "/future/backports/html/__init__.pyo", "start": 1318612, "end": 1319262, "audio": 0}, {"filename": "/future/backports/html/entities.pyo", "start": 1319262, "end": 1384546, "audio": 0}, {"filename": "/future/backports/html/parser.pyo", "start": 1384546, "end": 1398313, "audio": 0}, {"filename": "/future/backports/email/base64mime.pyo", "start": 1398313, "end": 1400510, "audio": 0}, {"filename": "/future/backports/email/_encoded_words.pyo", "start": 1400510, "end": 1406064, "audio": 0}, {"filename": "/future/backports/email/feedparser.pyo", "start": 1406064, "end": 1417263, "audio": 0}, {"filename": "/future/backports/email/__init__.pyo", "start": 1417263, "end": 1419046, "audio": 0}, {"filename": "/future/backports/email/utils.pyo", "start": 1419046, "end": 1428633, "audio": 0}, {"filename": "/future/backports/email/_header_value_parser.pyo", "start": 1428633, "end": 1509723, "audio": 0}, {"filename": "/future/backports/email/encoders.pyo", "start": 1509723, "end": 1512133, "audio": 0}, {"filename": "/future/backports/email/headerregistry.pyo", "start": 1512133, "end": 1531314, "audio": 0}, {"filename": "/future/backports/email/errors.pyo", "start": 1531314, "end": 1536806, "audio": 0}, {"filename": "/future/backports/email/iterators.pyo", "start": 1536806, "end": 1538805, "audio": 0}, {"filename": "/future/backports/email/parser.pyo", "start": 1538805, "end": 1542501, "audio": 0}, {"filename": "/future/backports/email/_policybase.pyo", "start": 1542501, "end": 1550035, "audio": 0}, {"filename": "/future/backports/email/_parseaddr.pyo", "start": 1550035, "end": 1562267, "audio": 0}, {"filename": "/future/backports/email/message.pyo", "start": 1562267, "end": 1579609, "audio": 0}, {"filename": "/future/backports/email/policy.pyo", "start": 1579609, "end": 1583666, "audio": 0}, {"filename": "/future/backports/email/charset.pyo", "start": 1583666, "end": 1590669, "audio": 0}, {"filename": "/future/backports/email/quoprimime.pyo", "start": 1590669, "end": 1597797, "audio": 0}, {"filename": "/future/backports/email/generator.pyo", "start": 1597797, "end": 1609179, "audio": 0}, {"filename": "/future/backports/email/header.pyo", "start": 1609179, "end": 1623000, "audio": 0}, {"filename": "/future/backports/email/mime/base.pyo", "start": 1623000, "end": 1623886, "audio": 0}, {"filename": "/future/backports/email/mime/__init__.pyo", "start": 1623886, "end": 1624014, "audio": 0}, {"filename": "/future/backports/email/mime/image.pyo", "start": 1624014, "end": 1625168, "audio": 0}, {"filename": "/future/backports/email/mime/text.pyo", "start": 1625168, "end": 1626281, "audio": 0}, {"filename": "/future/backports/email/mime/audio.pyo", "start": 1626281, "end": 1627922, "audio": 0}, {"filename": "/future/backports/email/mime/application.pyo", "start": 1627922, "end": 1629040, "audio": 0}, {"filename": "/future/backports/email/mime/multipart.pyo", "start": 1629040, "end": 1630039, "audio": 0}, {"filename": "/future/backports/email/mime/nonmultipart.pyo", "start": 1630039, "end": 1630981, "audio": 0}, {"filename": "/future/backports/email/mime/message.pyo", "start": 1630981, "end": 1632087, "audio": 0}, {"filename": "/future/backports/test/keycert.passwd.pem", "start": 1632087, "end": 1633917, "audio": 0}, {"filename": "/future/backports/test/nullbytecert.pem", "start": 1633917, "end": 1639352, "audio": 0}, {"filename": "/future/backports/test/__init__.pyo", "start": 1639352, "end": 1639476, "audio": 0}, {"filename": "/future/backports/test/ssl_key.pem", "start": 1639476, "end": 1640392, "audio": 0}, {"filename": "/future/backports/test/nokia.pem", "start": 1640392, "end": 1642315, "audio": 0}, {"filename": "/future/backports/test/keycert2.pem", "start": 1642315, "end": 1644110, "audio": 0}, {"filename": "/future/backports/test/badcert.pem", "start": 1644110, "end": 1646038, "audio": 0}, {"filename": "/future/backports/test/ssl_cert.pem", "start": 1646038, "end": 1646905, "audio": 0}, {"filename": "/future/backports/test/badkey.pem", "start": 1646905, "end": 1649067, "audio": 0}, {"filename": "/future/backports/test/dh512.pem", "start": 1649067, "end": 1649469, "audio": 0}, {"filename": "/future/backports/test/support.pyo", "start": 1649469, "end": 1698706, "audio": 0}, {"filename": "/future/backports/test/ssl_servers.pyo", "start": 1698706, "end": 1706820, "audio": 0}, {"filename": "/future/backports/test/sha256.pem", "start": 1706820, "end": 1715164, "audio": 0}, {"filename": "/future/backports/test/ssl_key.passwd.pem", "start": 1715164, "end": 1716127, "audio": 0}, {"filename": "/future/backports/test/nullcert.pem", "start": 1716127, "end": 1716127, "audio": 0}, {"filename": "/future/backports/test/pystone.pyo", "start": 1716127, "end": 1722864, "audio": 0}, {"filename": "/future/backports/test/keycert.pem", "start": 1722864, "end": 1724647, "audio": 0}, {"filename": "/future/backports/test/https_svn_python_org_root.pem", "start": 1724647, "end": 1727216, "audio": 0}, {"filename": "/future/backports/urllib/__init__.pyo", "start": 1727216, "end": 1727340, "audio": 0}, {"filename": "/future/backports/urllib/response.pyo", "start": 1727340, "end": 1731385, "audio": 0}, {"filename": "/future/backports/urllib/robotparser.pyo", "start": 1731385, "end": 1737515, "audio": 0}, {"filename": "/future/backports/urllib/parse.pyo", "start": 1737515, "end": 1762880, "audio": 0}, {"filename": "/future/backports/urllib/request.pyo", "start": 1762880, "end": 1834813, "audio": 0}, {"filename": "/future/backports/urllib/error.pyo", "start": 1834813, "end": 1837266, "audio": 0}, {"filename": "/future/standard_library/__init__.pyo", "start": 1837266, "end": 1851086, "audio": 0}, {"filename": "/future/tests/base.pyo", "start": 1851086, "end": 1863995, "audio": 0}, {"filename": "/future/tests/__init__.pyo", "start": 1863995, "end": 1864108, "audio": 0}, {"filename": "/future/moves/itertools.pyo", "start": 1864108, "end": 1864451, "audio": 0}, {"filename": "/future/moves/_markupbase.pyo", "start": 1864451, "end": 1864802, "audio": 0}, {"filename": "/future/moves/__init__.pyo", "start": 1864802, "end": 1865182, "audio": 0}, {"filename": "/future/moves/copyreg.pyo", "start": 1865182, "end": 1865597, "audio": 0}, {"filename": "/future/moves/socketserver.pyo", "start": 1865597, "end": 1865952, "audio": 0}, {"filename": "/future/moves/configparser.pyo", "start": 1865952, "end": 1866268, "audio": 0}, {"filename": "/future/moves/subprocess.pyo", "start": 1866268, "end": 1866778, "audio": 0}, {"filename": "/future/moves/reprlib.pyo", "start": 1866778, "end": 1867115, "audio": 0}, {"filename": "/future/moves/collections.pyo", "start": 1867115, "end": 1867839, "audio": 0}, {"filename": "/future/moves/builtins.pyo", "start": 1867839, "end": 1868217, "audio": 0}, {"filename": "/future/moves/winreg.pyo", "start": 1868217, "end": 1868555, "audio": 0}, {"filename": "/future/moves/_thread.pyo", "start": 1868555, "end": 1868894, "audio": 0}, {"filename": "/future/moves/queue.pyo", "start": 1868894, "end": 1869228, "audio": 0}, {"filename": "/future/moves/sys.pyo", "start": 1869228, "end": 1869552, "audio": 0}, {"filename": "/future/moves/pickle.pyo", "start": 1869552, "end": 1869946, "audio": 0}, {"filename": "/future/moves/_dummy_thread.pyo", "start": 1869946, "end": 1870303, "audio": 0}, {"filename": "/future/moves/dbm/__init__.pyo", "start": 1870303, "end": 1870815, "audio": 0}, {"filename": "/future/moves/dbm/ndbm.pyo", "start": 1870815, "end": 1871153, "audio": 0}, {"filename": "/future/moves/dbm/gnu.pyo", "start": 1871153, "end": 1871490, "audio": 0}, {"filename": "/future/moves/dbm/dumb.pyo", "start": 1871490, "end": 1871832, "audio": 0}, {"filename": "/future/moves/http/cookies.pyo", "start": 1871832, "end": 1872220, "audio": 0}, {"filename": "/future/moves/http/client.pyo", "start": 1872220, "end": 1872549, "audio": 0}, {"filename": "/future/moves/http/__init__.pyo", "start": 1872549, "end": 1872773, "audio": 0}, {"filename": "/future/moves/http/cookiejar.pyo", "start": 1872773, "end": 1873129, "audio": 0}, {"filename": "/future/moves/http/server.pyo", "start": 1873129, "end": 1873729, "audio": 0}, {"filename": "/future/moves/xmlrpc/client.pyo", "start": 1873729, "end": 1874044, "audio": 0}, {"filename": "/future/moves/xmlrpc/__init__.pyo", "start": 1874044, "end": 1874164, "audio": 0}, {"filename": "/future/moves/xmlrpc/server.pyo", "start": 1874164, "end": 1874479, "audio": 0}, {"filename": "/future/moves/html/__init__.pyo", "start": 1874479, "end": 1875174, "audio": 0}, {"filename": "/future/moves/html/entities.pyo", "start": 1875174, "end": 1875533, "audio": 0}, {"filename": "/future/moves/html/parser.pyo", "start": 1875533, "end": 1875884, "audio": 0}, {"filename": "/future/moves/test/__init__.pyo", "start": 1875884, "end": 1876171, "audio": 0}, {"filename": "/future/moves/test/support.pyo", "start": 1876171, "end": 1876623, "audio": 0}, {"filename": "/future/moves/urllib/__init__.pyo", "start": 1876623, "end": 1876912, "audio": 0}, {"filename": "/future/moves/urllib/response.pyo", "start": 1876912, "end": 1877408, "audio": 0}, {"filename": "/future/moves/urllib/robotparser.pyo", "start": 1877408, "end": 1877774, "audio": 0}, {"filename": "/future/moves/urllib/parse.pyo", "start": 1877774, "end": 1878637, "audio": 0}, {"filename": "/future/moves/urllib/request.pyo", "start": 1878637, "end": 1879870, "audio": 0}, {"filename": "/future/moves/urllib/error.pyo", "start": 1879870, "end": 1880430, "audio": 0}, {"filename": "/future/moves/tkinter/commondialog.pyo", "start": 1880430, "end": 1880908, "audio": 0}, {"filename": "/future/moves/tkinter/colorchooser.pyo", "start": 1880908, "end": 1881386, "audio": 0}, {"filename": "/future/moves/tkinter/messagebox.pyo", "start": 1881386, "end": 1881856, "audio": 0}, {"filename": "/future/moves/tkinter/__init__.pyo", "start": 1881856, "end": 1882634, "audio": 0}, {"filename": "/future/moves/tkinter/scrolledtext.pyo", "start": 1882634, "end": 1883108, "audio": 0}, {"filename": "/future/moves/tkinter/constants.pyo", "start": 1883108, "end": 1883574, "audio": 0}, {"filename": "/future/moves/tkinter/dialog.pyo", "start": 1883574, "end": 1884024, "audio": 0}, {"filename": "/future/moves/tkinter/ttk.pyo", "start": 1884024, "end": 1884462, "audio": 0}, {"filename": "/future/moves/tkinter/filedialog.pyo", "start": 1884462, "end": 1884928, "audio": 0}, {"filename": "/future/moves/tkinter/tix.pyo", "start": 1884928, "end": 1885366, "audio": 0}, {"filename": "/future/moves/tkinter/font.pyo", "start": 1885366, "end": 1885812, "audio": 0}, {"filename": "/future/moves/tkinter/simpledialog.pyo", "start": 1885812, "end": 1886286, "audio": 0}, {"filename": "/future/moves/tkinter/dnd.pyo", "start": 1886286, "end": 1886728, "audio": 0}, {"filename": "/future/types/__init__.pyo", "start": 1886728, "end": 1889325, "audio": 0}, {"filename": "/future/types/newobject.pyo", "start": 1889325, "end": 1890847, "audio": 0}, {"filename": "/future/types/newrange.pyo", "start": 1890847, "end": 1896099, "audio": 0}, {"filename": "/future/types/newopen.pyo", "start": 1896099, "end": 1897481, "audio": 0}, {"filename": "/future/types/newmemoryview.pyo", "start": 1897481, "end": 1898349, "audio": 0}, {"filename": "/future/types/newlist.pyo", "start": 1898349, "end": 1900869, "audio": 0}, {"filename": "/future/types/newdict.pyo", "start": 1900869, "end": 1903211, "audio": 0}, {"filename": "/future/types/newint.pyo", "start": 1903211, "end": 1914526, "audio": 0}, {"filename": "/future/types/newbytes.pyo", "start": 1914526, "end": 1927323, "audio": 0}, {"filename": "/future/types/newstr.pyo", "start": 1927323, "end": 1938995, "audio": 0}, {"filename": "/future/utils/surrogateescape.pyo", "start": 1938995, "end": 1942860, "audio": 0}, {"filename": "/future/utils/__init__.pyo", "start": 1942860, "end": 1958167, "audio": 0}, {"filename": "/copyreg/__init__.pyo", "start": 1958167, "end": 1958645, "audio": 0}, {"filename": "/winreg/__init__.pyo", "start": 1958645, "end": 1959160, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/top_level.txt", "start": 1959160, "end": 1959167, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/METADATA", "start": 1959167, "end": 1961432, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/RECORD", "start": 1961432, "end": 1962005, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/INSTALLER", "start": 1962005, "end": 1962009, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/LICENSE", "start": 1962009, "end": 1974764, "audio": 0}, {"filename": "/typing-3.10.0.0.dist-info/WHEEL", "start": 1974764, "end": 1974856, "audio": 0}, {"filename": "/queue/__init__.pyo", "start": 1974856, "end": 1975368, "audio": 0}, {"filename": "/tkinter/commondialog.pyo", "start": 1975368, "end": 1975833, "audio": 0}, {"filename": "/tkinter/colorchooser.pyo", "start": 1975833, "end": 1976298, "audio": 0}, {"filename": "/tkinter/messagebox.pyo", "start": 1976298, "end": 1976755, "audio": 0}, {"filename": "/tkinter/__init__.pyo", "start": 1976755, "end": 1977645, "audio": 0}, {"filename": "/tkinter/scrolledtext.pyo", "start": 1977645, "end": 1978106, "audio": 0}, {"filename": "/tkinter/constants.pyo", "start": 1978106, "end": 1978559, "audio": 0}, {"filename": "/tkinter/dialog.pyo", "start": 1978559, "end": 1978996, "audio": 0}, {"filename": "/tkinter/ttk.pyo", "start": 1978996, "end": 1979421, "audio": 0}, {"filename": "/tkinter/filedialog.pyo", "start": 1979421, "end": 1980029, "audio": 0}, {"filename": "/tkinter/tix.pyo", "start": 1980029, "end": 1980454, "audio": 0}, {"filename": "/tkinter/font.pyo", "start": 1980454, "end": 1980887, "audio": 0}, {"filename": "/tkinter/simpledialog.pyo", "start": 1980887, "end": 1981348, "audio": 0}, {"filename": "/tkinter/dnd.pyo", "start": 1981348, "end": 1981777, "audio": 0}, {"filename": "/reprlib/__init__.pyo", "start": 1981777, "end": 1982251, "audio": 0}], "remote_package_size": 1982251, "package_uuid": "f39ff53f-f92e-4a8a-a627-5aa153b7d9e8"});
  
  })();
  